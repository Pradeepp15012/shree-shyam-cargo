import { MessageCircleMore, Phone } from 'lucide-react';
import { callLink, whatsappLink } from '../utils/helpers';

export default function FloatingActions() {
  return (
    <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-40 px-4 pb-4">
      <div className="container-shell flex justify-end">
        <div className="floating-safe pointer-events-auto flex flex-col gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-soft transition hover:scale-105"
            aria-label="WhatsApp"
          >
            <MessageCircleMore className="h-6 w-6" />
          </a>
          <a
            href={callLink}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-soft transition hover:scale-105"
            aria-label="Call"
          >
            <Phone className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

