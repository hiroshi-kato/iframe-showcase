import { useState } from 'hono/jsx';
import Input from './input';
import Textarea from './textarea';

export default function Showcase() {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);
  const [srcUrl, setSrcUrl] = useState('');
  // iframeタグをstringとして受け取る
  const [iframeString, setIframeString] = useState(
    '<iframe width=500 height=500 src="https://www.google.com" style="border-radius:10px"></iframe>'
  );

  const handleSrcUrlChange = (e: Event) => {
    setSrcUrl((e.target as HTMLInputElement).value);
  };

  const handleWidthChange = (e: Event) => {
    setWidth(Number((e.target as HTMLInputElement).value));
  };

  const handleHeightChange = (e: Event) => {
    setHeight(Number((e.target as HTMLInputElement).value));
  };

  const handleIframeLoad = (e: Event) => {
    setIframeString((e.target as HTMLInputElement).value);
  };

  return (
    <div class={'flex flex-col items-center w-full mt-8'}>
      <div class={'flex flex-col gap-4 items-center'}>
        <h2 class='text-xl font-bold mt-4'>iframe from Src</h2>
        <Textarea
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
      <div class={'flex flex-col gap-4 items-center mt-8'}>
        <h2 class='text-xl font-bold mt-4'>iframe from DOM String</h2>
        <Textarea
          label='iframe DOM String'
          value={iframeString}
          onChange={handleIframeLoad}
        />

        <div
          dangerouslySetInnerHTML={{ __html: iframeString }}
          class={' mt-4'}
        />
      </div>
    </div>
  );
}
