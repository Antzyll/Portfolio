type DividerProps = {
  variant?: "grey" | "gold";
  spacing?: "tight" | "normal";
};

export default function Divider({ variant = "grey", spacing = "normal" }: DividerProps) {
  const colors =
    variant === "gold"
      ? "from-transparent via-[#E6B654] to-transparent"
      : "from-transparent via-slate-200 to-transparent";
  const space = spacing === "tight" ? "my-6" : "my-12";
  return <div className={`h-px w-full ${space} bg-gradient-to-r ${colors}`} />;
}