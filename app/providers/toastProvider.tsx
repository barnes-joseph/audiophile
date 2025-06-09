import React, { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface Toast {
  id: number;
  message: string;
  duration?: number;
}

interface ToastContextType {
  toasts: Toast[];
  showToast: (message: string, duration?: number) => void;
}

const ToastContext = createContext<ToastContextType>({} as ToastContextType);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismissToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback((message: string, duration = 3000) => {
    const id = toasts.length;
    setToasts((prev) => [...prev, { id, message, duration }]);

    setTimeout(() => {
      dismissToast(id);
    }, duration);
  }, []);

  

  return (
    <ToastContext.Provider value={{ toasts, showToast }}>
      {children}
      <div className="fixed top-4 right-4 flex flex-col space-y-2 z-50">
        {toasts.map(({ id, message }) => (
          <div
            key={id}
            className="
              bg-gray-primary text-black px-5 py-3 rounded shadow-lg
              text-sm font-medium animate-fade-in
            "
          >
            {message}
            <button
              onClick={() => dismissToast(id)}
              className="ml-4 text-black hover:cursor-pointer focus:outline-none"
              aria-label="Dismiss notification"
            >
              &#10005;
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  return context;
};
