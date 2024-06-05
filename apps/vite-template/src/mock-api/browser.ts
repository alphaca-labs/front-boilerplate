import { handlers } from "@/mock-api/handler";
import { setupWorker } from "msw/browser";

export const worker = setupWorker(...handlers);
