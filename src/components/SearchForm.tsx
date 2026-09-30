"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore, useTransition } from "react";
import { courses, getCourse, getUnit } from "@/content";
import { filterQuery, unitOptions, type LibraryFilter } from "@/lib/library";
import { TOPIC_MAX } from "@/lib/search";
import { Icon } from "./Icon";
import styles from "./SearchForm.module.css";

const SELECT_DELAY = 300; // some browsers fire change on every arrow key in a closed select
const TOPIC_DELAY = 700;

const noop = () => () => {};

const same = (a: LibraryFilter, b: LibraryFilter) =>
  (a.courseId ?? "") === (b.courseId ?? "") && (a.unitId ?? "") === (b.unitId ?? "") && (a.topic ?? "") === (b.topic ?? "");

export const describeFilter = (f: LibraryFilter) =>
  [getCourse(f.courseId ?? "")?.name ?? "All courses", getUnit(f.unitId ?? "")?.name, f.topic && `“${f.topic}”`]
    .filter(Boolean)
    .join(" · ");

// The library filter. Base: a plain GET form to "/" that works before hydration and without JS.
// With JS it applies on change, keeps scroll and focus, and writes the filter to the URL.
export function SearchForm({ filter, count }: { filter: LibraryFilter; count: number }) {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [courseId, setCourseId] = useState(filter.courseId ?? "");
  const [unitId, setUnitId] = useState(filter.unitId ?? "");
  const [topic, setTopic] = useState(filter.topic ?? "");
  // True once JS runs; until then the form submits as a plain GET.
  const hydrated = useSyncExternalStore(noop, () => true, () => false);
  const [formVisible, setFormVisible] = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  // The filter this form last wrote to the URL, so its own navigation is not treated as outside change.
  const [sent, setSent] = useState<LibraryFilter | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Back/Forward and links change the URL without this form: follow them.
  const [seen, setSeen] = useState(filter);
  if (!same(seen, filter)) {
    setSeen(filter);
    setSent(null);
    if (!sent || !same(sent, filter)) {
      setCourseId(filter.courseId ?? "");
      setUnitId(filter.unitId ?? "");
      setTopic(filter.topic ?? "");
    }
  }

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const io = new IntersectionObserver(([entry]) => setFormVisible(entry.isIntersecting), { rootMargin: "-80px 0px 0px 0px" });
    io.observe(form);
    return () => {
      io.disconnect();
      clearTimeout(timer.current);
    };
  }, []);

  const go = (next: LibraryFilter, { delay = 0, push = false } = {}) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      const clean = { courseId: next.courseId || undefined, unitId: next.unitId || undefined, topic: next.topic?.trim() || undefined };
      setSent(clean);
      const q = filterQuery(clean);
      const href = q ? `/?${q}` : "/";
      startTransition(() => (push ? router.push(href, { scroll: false }) : router.replace(href, { scroll: false })));
    }, delay);
  };

  const units = courseId ? unitOptions(courseId) : [];
  const ready = units.filter((u) => u.ready);
  const notYet = units.filter((u) => !u.ready);
  const course = getCourse(courseId);
  const filtered = !!(filter.courseId || filter.topic);
  const countText = !filtered
    ? `${count} ${count === 1 ? "example" : "examples"}`
    : count
      ? `${count} matching`
      : "No prepared match";

  const unitLabel = (u: (typeof units)[number]) => (u.note ? `${u.name} · ${u.note}` : u.name);

  return (
    <>
      {/* On phones this wrapper extends the hero's dark ground behind the form. */}
      <div className={styles.console}>
        <form
          ref={formRef}
          action="/"
          method="get"
          className={styles.bar}
          aria-label="Filter examples"
          onSubmit={(e) => {
            if (!hydrated) return;
            e.preventDefault();
            go({ courseId, unitId, topic }, { push: true });
          }}
        >
          <div className={styles.fields}>
            <div className={styles.field}>
              <span className={styles.caption} aria-hidden="true">I teach</span>
              <label htmlFor="filter-course" className="sr-only">Course</label>
              <div className={styles.control}>
                <select
                  id="filter-course"
                  name="course"
                  className={`input ${styles.input} ${styles.select}`}
                  value={courseId}
                  onChange={(e) => {
                    setCourseId(e.target.value);
                    setUnitId("");
                    go({ courseId: e.target.value, unitId: "", topic }, { delay: SELECT_DELAY, push: true });
                  }}
                >
                  <option value="">All courses</option>
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <Icon name="chevronDown" small className={styles.chevron} />
              </div>
            </div>
            <div className={styles.field}>
              <span className={styles.caption} aria-hidden="true">and we’re on</span>
              <label htmlFor="filter-unit" className="sr-only">Unit</label>
              <div className={styles.control}>
                <select
                  id="filter-unit"
                  name="unit"
                  className={`input ${styles.input} ${styles.select}`}
                  value={unitId}
                  disabled={!courseId}
                  onChange={(e) => {
                    setUnitId(e.target.value);
                    go({ courseId, unitId: e.target.value, topic }, { delay: SELECT_DELAY });
                  }}
                >
                  <option value="">{courseId ? "Any unit" : "Choose a course first"}</option>
                  {ready.length > 0 && (
                    <optgroup label="Ready now">
                      {ready.map((u) => (
                        <option key={u.id} value={u.id}>
                          {unitLabel(u)}
                        </option>
                      ))}
                    </optgroup>
                  )}
                  {notYet.length > 0 && (
                    <optgroup label="Not prepared yet">
                      {notYet.map((u) => (
                        <option key={u.id} value={u.id}>
                          {unitLabel(u)}
                        </option>
                      ))}
                    </optgroup>
                  )}
                </select>
                <Icon name="chevronDown" small className={styles.chevron} />
              </div>
            </div>
            <div className={`${styles.field} ${styles.topicField}`}>
              <span className={styles.caption} aria-hidden="true">Topic</span>
              <label htmlFor="filter-topic" className="sr-only">
                Topic, organization or career
              </label>
              <div className={styles.control}>
                <Icon name="search" className={styles.searchIcon} />
                <input
                  id="filter-topic"
                  name="topic"
                  type="search"
                  className={`input ${styles.input} ${styles.topic}`}
                  maxLength={TOPIC_MAX}
                  value={topic}
                  placeholder="Topic, organization or career"
                  autoComplete="off"
                  onChange={(e) => {
                    setTopic(e.target.value);
                    go({ courseId, unitId, topic: e.target.value }, { delay: TOPIC_DELAY });
                  }}
                />
              </div>
            </div>
            {/* Without JS this submits the GET form. With JS the filter applies on change; the button applies it at once. */}
            <button type="submit" className={`btn btn-ink ${styles.submit}`}>
              Show examples
              <Icon name="arrowRight" small />
            </button>
          </div>
          {filtered && (
            <div className={styles.status}>
              <p role="status" className={styles.count}>{countText}</p>
              {course && (
                <p className={styles.coverage}>
                  {course.name}: {ready.length} of {units.length} units ready
                </p>
              )}
              <Link href="/#library" scroll={false} className={styles.clear}>Clear</Link>
            </div>
          )}
        </form>
      </div>

      {/* Phones: the form scrolls away; this one row brings it back. */}
      <button
        type="button"
        className={styles.summary}
        hidden={formVisible}
        onClick={() => {
          formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
          document.getElementById("filter-course")?.focus({ preventScroll: true });
        }}
      >
        <span className={styles.summaryText}>{describeFilter(filter)}</span>
        {filtered && <span className={styles.summaryCount}>{countText}</span>}
        <span className={styles.summaryAction}>Change</span>
      </button>
    </>
  );
}
