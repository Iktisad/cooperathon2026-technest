import { Check, ChevronDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface SelectProps {
  value: string;
  onChange: (e: { target: { value: string } }) => void;
  children: React.ReactNode;
  className?: string;
}

function Select({ value, onChange, children, className = "" }: SelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  type OptionProps = { value?: string; children: string };
  const options = React.Children.toArray(children)
    .filter((child): child is React.ReactElement<OptionProps> =>
      React.isValidElement(child) && child.type === "option",
    )
    .map((child) => ({
      value: String(child.props.value ?? child.props.children),
      label: String(child.props.children),
    }));

  const selectedLabel = options.find((o) => o.value === value)?.label ?? value;

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between rounded-md border bg-gray-50 px-3 py-2.5 text-sm text-secondary shadow-xs transition-all hover:bg-white ${
          open
            ? "border-primary ring-2 ring-primary/30 bg-white"
            : "border-gray-200"
        }`}
      >
        <span className="truncate">{selectedLabel}</span>
        <ChevronDown
          className={`ml-2 h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute z-50 mt-1 w-full overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg">
          {options.map((opt) => {
            const selected = opt.value === value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onChange({ target: { value: opt.value } });
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-3 py-2.5 text-left text-sm transition-colors ${
                  selected
                    ? "bg-secondary text-white font-medium"
                    : "text-secondary hover:bg-primary/10"
                }`}
              >
                <span>{opt.label}</span>
                {selected && <Check className="h-3.5 w-3.5 shrink-0 text-primary" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Select;
