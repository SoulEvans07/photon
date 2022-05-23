import { ReactElement, useEffect, useMemo } from 'react';
import fs from 'fs';
import './root.scss';

const folder = 'C:/Users/Soul/playground/photon-file-watch';

export function App(): ReactElement {
  const text = useMemo((): string => {
      const contents = fs.readdirSync(folder);
    return contents.join('\n');
  }, []);

  return (
    <main>
      <h1>photon</h1>

      <div>{text}</div>
    </main>
  );
}
