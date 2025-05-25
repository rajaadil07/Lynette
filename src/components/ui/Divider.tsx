interface DividerProps {
  text?: string;
}

export default function Divider({ text = 'or' }: DividerProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-3 bg-white text-gray-400 font-light">{text}</span>
      </div>
    </div>
  );
} 