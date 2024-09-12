import * as PortOne from "@portone/browser-sdk/v2";
import { useEffect } from "react";

export function PortOneTest() {
  useEffect(() => {
    const requestPayment = async () => {
      try {
        const paymentId = `payment-${crypto.randomUUID()}`;
        const response = await PortOne.requestPayment({
          // Store ID 설정
          storeId: "store-f3a08677-e4ce-45bc-adf1-29cef5090b16",
          // 채널 키 설정
          channelKey: "channel-key-b29ef653-43ae-4692-9fc6-e72128ea5f9d",
          paymentId,
          orderName: "나이키 와플 트레이너 2 SD",
          totalAmount: 1000,
          currency: "CURRENCY_KRW",
          payMethod: "CARD",
        });
        console.log(response);
        if (!response) return;
        if (response.code !== null) {
          // 오류 발생
          return alert(response.message);
        }
        // /payment/complete 엔드포인트를 구현해야 합니다. 다음 목차에서 설명합니다.
        const SERVER_BASE_URL = "localhost:3000";
        const notified = await fetch(`${SERVER_BASE_URL}/payment/complete`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // paymentId와 주문 정보를 서버에 전달합니다
          body: JSON.stringify({
            paymentId,
            // 주문 정보...
          }),
        });
        console.log(notified);
      } catch (e) {
        console.log(e);
      }
    };
    requestPayment();
  }, []);

  return <div className=""></div>;
}
