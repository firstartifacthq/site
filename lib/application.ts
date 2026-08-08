export const applicationRoles = ["builder", "founder"] as const;

export type ApplicationRole = (typeof applicationRoles)[number];

export type ApplicationValues = {
  name: string;
  email: string;
  role: string;
  workUrl: string;
  built: string;
  obsession: string;
};

export type ValidApplication = Omit<ApplicationValues, "role"> & {
  role: ApplicationRole;
};

export type ApplicationErrors = Partial<Record<keyof ApplicationValues, string>>;

export const emptyApplication: ApplicationValues = {
  name: "",
  email: "",
  role: "",
  workUrl: "",
  built: "",
  obsession: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isWebUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function normalize(values: ApplicationValues): ApplicationValues {
  return {
    name: values.name.trim(),
    email: values.email.trim().toLowerCase(),
    role: values.role.trim().toLowerCase(),
    workUrl: values.workUrl.trim(),
    built: values.built.trim(),
    obsession: values.obsession.trim(),
  };
}

export function validateApplication(values: ApplicationValues):
  | { success: true; data: ValidApplication }
  | { success: false; errors: ApplicationErrors } {
  const data = normalize(values);
  const errors: ApplicationErrors = {};

  if (!data.name) errors.name = "Add your name.";

  if (!data.email) errors.email = "Add your email address.";
  else if (!emailPattern.test(data.email)) errors.email = "Enter a valid email address.";

  if (!applicationRoles.includes(data.role as ApplicationRole)) {
    errors.role = "Choose builder or founder.";
  }

  if (!data.workUrl) errors.workUrl = "Add a link to your strongest shipped work.";
  else if (!isWebUrl(data.workUrl)) errors.workUrl = "Use a complete http or https link.";

  if (!data.built) errors.built = "Tell us what you built.";
  if (!data.obsession) errors.obsession = "Tell us what you cannot stop thinking about.";

  if (Object.keys(errors).length > 0) return { success: false, errors };

  return { success: true, data: data as ValidApplication };
}

export function formatApplication(application: ValidApplication) {
  const role = application.role[0].toUpperCase() + application.role.slice(1);

  return [
    "First Artifact application",
    "",
    `Name: ${application.name}`,
    `Email: ${application.email}`,
    `Role: ${role}`,
    `Strongest shipped work: ${application.workUrl}`,
    "",
    "What I built:",
    application.built,
    "",
    "What I cannot stop thinking about:",
    application.obsession,
  ].join("\n");
}
