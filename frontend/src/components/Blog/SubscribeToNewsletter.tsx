"use client";

import { Subscribe } from "@/api/subscribe";
import { useState } from "react";
import { Loading } from "../Shared";

const subscribeCtrl = new Subscribe();

export function SubscribeToNewsletter() {
  const [email, setEmail] = useState("");
  const [hasSignedUp, setHasSignedUp] = useState(false);
  const [hasSubiscribed, setHasSubiscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    const response = await subscribeCtrl.postSubscribe(email);

    if (response?.status === 200) {
      setHasSignedUp(true);
      setLoading(false);
    }

    if (response?.status === 400) {
      setHasSubiscribed(true);
      setLoading(false);
    }
  };

  return (
    <section className="subscribe-to-newsletter">
      {hasSignedUp ? (
        <h4 className="subscribe-to-newsletter__success">
          Obrigado por se inscrever !
        </h4>
      ) : (
        <>
          <div className="subscribe-to-newsletter__info">
            <h4>subscribe to our newsletter</h4>

            <p className="copy">
              Unlock Exclusive Insights and Stay In the Know – Subscribe to Our
              Newsletter Today to always stay in touch
            </p>
          </div>

          {hasSubiscribed ? (
            <h4 className="subscribe-to-newsletter__serror">
              Email já inscrito !
            </h4>
          ) : (
            <form
              className="subscribe-to-newsletter__form"
              onSubmit={handleOnSubmit}
            >
              <input
                type="email"
                placeholder="Entre com email"
                className="subscribe-to-newsletter__email input"
                value={email}
                onChange={handleOnChange}
              />

              <button
                type="submit"
                className="subscribe-to-newsletter__submit btn btn--medium btn--turquoise"
              >
                {loading ? <Loading /> : "Assine"}
              </button>
            </form>
          )}
        </>
      )}
    </section>
  );
}
