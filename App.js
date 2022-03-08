import * as React from "react";
import { WebView } from "react-native-webview";

export default class App extends React.Component {
  render() {
    return (
      <WebView
        source={{ uri: "https://quicktalk.vercel.app/" }}
        style={{ marginTop: 35 }}
        userAgent={
          Platform.OS === "android"
            ? "Chrome/18.0.1025.133 Mobile Safari/535.19"
            : "AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75"
        }
        originWhitelist={["https://*", "http://*", "file://*", "sms://*"]}
      />
    );
  }
}
