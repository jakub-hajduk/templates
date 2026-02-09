import { render } from 'preact';
import { Button } from '@create-figma-plugin/ui'
import '@create-figma-plugin/ui/css/base.css'
import '@ui/global.css';

(async () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) return;

  render(<Button onClick={console.log}>This is your Preact plugin! elo!</Button>, rootElement);
})();
