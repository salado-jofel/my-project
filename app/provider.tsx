"use client";
import { Provider } from "react-redux";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/system";
import { store } from "@/redux/store";

export default function Providers({ children }: { children: React.ReactNode }) {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <Provider store={store}>
      <NextUIProvider>{children}</NextUIProvider>
    </Provider>
  );
}
