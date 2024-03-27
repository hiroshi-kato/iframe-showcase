type Props = {
  label: string;
  value: string | number;
  onChange: (e: InputEvent) => void;
};

export default function Textarea({ label, value, onChange }: Props) {
  return (
    <div class={'flex flex-col items-center w-full'}>
      <label for={label}>{label}:</label>
      <textarea
        class='border border-gray-400  rounded-lg ml-2 max-w-96 min-w-52'
        style={{ fieldSizing: 'content' }}
        name={label}
        type={typeof value === 'string' ? 'text' : 'number'}
        value={value}
        onInput={onChange}
      />
    </div>
  );
}
