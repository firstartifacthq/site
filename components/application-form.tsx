"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Check, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  emptyApplication,
  formatApplication,
  validateApplication,
  type ApplicationErrors,
  type ApplicationValues,
  type ValidApplication,
} from "@/lib/application";

const fields: (keyof ApplicationValues)[] = [
  "name",
  "email",
  "role",
  "workUrl",
  "built",
  "obsession",
];

function FieldError({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={id} className="mt-2 text-sm font-medium text-[hsl(var(--signal-deep))]">
      {error}
    </p>
  );
}

export function ApplicationForm() {
  const [values, setValues] = useState<ApplicationValues>(emptyApplication);
  const [errors, setErrors] = useState<ApplicationErrors>({});
  const [reviewed, setReviewed] = useState<ValidApplication | null>(null);
  const [status, setStatus] = useState<"idle" | "ready" | "copied" | "copy-error">("idle");

  function update(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const field = event.target.name as keyof ApplicationValues;
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setReviewed(null);
    setStatus("idle");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = validateApplication(values);

    if (!result.success) {
      setErrors(result.errors);
      setReviewed(null);
      setStatus("idle");
      const firstInvalid = fields.find((field) => result.errors[field]);
      document.getElementById(firstInvalid ?? "name")?.focus();
      return;
    }

    setValues(result.data);
    setErrors({});
    setReviewed(result.data);
    setStatus("ready");
  }

  async function copyApplication() {
    if (!reviewed) return;
    try {
      await navigator.clipboard.writeText(formatApplication(reviewed));
      setStatus("copied");
    } catch {
      setStatus("copy-error");
    }
  }

  const errorCount = Object.values(errors).filter(Boolean).length;

  return (
    <form className="application-form" onSubmit={handleSubmit} noValidate>
      {errorCount > 0 ? (
        <div role="alert" className="mb-8 border-y border-[hsl(var(--signal))] bg-red-50 px-4 py-3 text-sm font-semibold text-[hsl(var(--signal-deep))]">
          Check {errorCount} {errorCount === 1 ? "field" : "fields"} and try again.
        </div>
      ) : null}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" value={values.name} onChange={update} required autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} className="mt-2" />
          <FieldError id="name-error" error={errors.name} />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" value={values.email} onChange={update} required autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} className="mt-2" />
          <FieldError id="email-error" error={errors.email} />
        </div>
        <div>
          <Label htmlFor="role">You are a</Label>
          <select id="role" name="role" value={values.role} onChange={update} required aria-invalid={Boolean(errors.role)} aria-describedby={errors.role ? "role-error" : undefined} className="mt-2 min-h-12 w-full border border-black/24 bg-white px-4 py-3 text-base text-black outline-none focus-visible:border-black focus-visible:ring-2 focus-visible:ring-black/18 aria-invalid:border-[hsl(var(--signal))]">
            <option value="">Select one</option>
            <option value="builder">Builder</option>
            <option value="founder">Founder</option>
          </select>
          <FieldError id="role-error" error={errors.role} />
        </div>
        <div>
          <Label htmlFor="workUrl">Strongest shipped work</Label>
          <Input id="workUrl" name="workUrl" type="url" value={values.workUrl} onChange={update} required inputMode="url" placeholder="https://" aria-invalid={Boolean(errors.workUrl)} aria-describedby={errors.workUrl ? "workUrl-error" : "workUrl-note"} className="mt-2" />
          <p id="workUrl-note" className="mt-2 text-sm text-black/62">A live product, repository, launch, or case study.</p>
          <FieldError id="workUrl-error" error={errors.workUrl} />
        </div>
      </div>

      <div className="mt-6">
        <Label htmlFor="built">What did you build?</Label>
        <Textarea id="built" name="built" value={values.built} onChange={update} required aria-invalid={Boolean(errors.built)} aria-describedby={errors.built ? "built-error" : undefined} className="mt-2" />
        <FieldError id="built-error" error={errors.built} />
      </div>

      <div className="mt-6">
        <Label htmlFor="obsession">What can’t you stop thinking about?</Label>
        <Textarea id="obsession" name="obsession" value={values.obsession} onChange={update} required aria-invalid={Boolean(errors.obsession)} aria-describedby={errors.obsession ? "obsession-error" : undefined} className="mt-2" />
        <FieldError id="obsession-error" error={errors.obsession} />
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" variant="red" size="wide" className="sm:w-auto sm:min-w-64">
          Review my application
        </Button>
        <p className="max-w-md text-sm leading-relaxed text-black/62">
          Nothing is sent yet. We’ll keep your answers in this page while you review them.
        </p>
      </div>

      {reviewed ? (
        <div className="mt-8 flex flex-col gap-4 border-y border-black bg-black px-5 py-5 text-white sm:flex-row sm:items-center sm:justify-between">
          <p role="status" aria-live="polite" className="max-w-xl text-sm leading-relaxed text-white/78">
            {status === "copied" ? "Copied. Your application is on your clipboard." : status === "copy-error" ? "Copy failed. Select and copy your answers from the form." : "Submissions aren’t connected yet. Your answers are still here; copy them before leaving."}
          </p>
          <Button type="button" variant="line" size="compact" onClick={copyApplication}>
            {status === "copied" ? <Check aria-hidden="true" size={16} /> : <Copy aria-hidden="true" size={16} />}
            Copy application
          </Button>
        </div>
      ) : null}
    </form>
  );
}
