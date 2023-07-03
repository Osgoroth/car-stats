import Providers from "./Providers";
import { agdasima } from "./fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={agdasima.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
