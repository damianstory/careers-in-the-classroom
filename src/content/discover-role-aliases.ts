// Equivalent work profiles share a card while company links keep the actual role ID.
export const discoverRoleAliases: Record<string, string> = {
  "work-software": "software-data",
  "work-process": "process-engineering",
};

export const discoverRoleId = (roleId: string) => discoverRoleAliases[roleId] ?? roleId;
