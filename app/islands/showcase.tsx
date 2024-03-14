import { useState } from 'hono/jsx';

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
        <label for='srcUrl'>Source URL:</label>
        <input
          class='border border-gray-400  rounded-lg ml-2'
          name='srcUrl'
          type='text'
          onInput={handleSrcUrlChange}
        />
      </div>
      <div>
        <label for='width'>Width:</label>
        <input
          name='width'
          value={width}
          type='number'
          onInput={handleWidthChange}
        />
      </div>

      <div>
        <label for='height'>Height:</label>
        <input
          name='height'
          type='number'
          value={height}
          onInput={handleHeightChange}
        />
      </div>
      <div>
        <iframe
          src={srcUrl}
          width={width}
          height={height}
          referrerpolicy='same-origin'
        />
      </div>
    </div>
  );
}
