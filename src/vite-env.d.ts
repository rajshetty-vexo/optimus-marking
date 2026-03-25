/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RECAPTCHA_SITE_KEY?: string;
  readonly VITE_ENABLE_RECAPTCHA?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  grecaptcha?: {
    ready: (cb: () => void) => void;
    execute: (siteKey: string, options: { action: string }) => Promise<string>;
  };
}