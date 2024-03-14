type Props = {
  label: string;
  value: string | number;
  onChange: (e: InputEvent) => void;
};

export default function Input({ label, value, onChange }: Props) {
  return (
    <div>
      <label for={label}>{label}:</label>
      <input
        class='border border-gray-400  rounded-lg ml-2'
        name={label}
        type={typeof value === 'string' ? 'text' : 'number'}
        value={value}
        onInput={onChange}
      />
    </div>
  );
}
