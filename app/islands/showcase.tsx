import { useState } from 'hono/jsx';
import Input from './input';

export default function Showcase() {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);
  const [srcUrl, setSrcUrl] = useState('');

  const handleSrcUrlChange = (e: Event) => {
    setSrcUrl((e.target as HTMLInputElement).value);
  };

  const handleWidthChange = (e: Event) => {
    setWidth(Number((e.target as HTMLInputElement).value));
  };

  const handleHeightChange = (e: Event) => {
    setHeight(Number((e.target as HTMLInputElement).value));
  };

  return (
    <div>
      <div>
        <Input
          label='Source URL'
          value={srcUrl}
          onChange={handleSrcUrlChange}
        />
        <Input label='Width' value={width} onChange={handleWidthChange} />
        <Input label='Height' value={height} onChange={handleHeightChange} />
      </div>
      <div>
        <iframe
          src={srcUrl}
          width={width}
          height={height}
          referrerpolicy='same-origin'
          class={'border border-gray-400 rounded-lg mt-4'}
        />
      </div>
    </div>
  );
}
