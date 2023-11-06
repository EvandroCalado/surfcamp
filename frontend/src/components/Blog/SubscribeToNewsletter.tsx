"use client";

import { useState } from "react";

export function SubscribeToNewsletter() {
  const [email, setEmail] = useState("");
  const [hasSignedUp, setHasSignedUp] = useState(false);

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.length) {
      setHasSignedUp(true);

      // TODO: send email to strapi
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
              Assine
            </button>
          </form>
        </>
      )}
    </section>
  );
}
