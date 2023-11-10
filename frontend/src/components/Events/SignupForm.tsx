"use client";

import { PasticipantClass } from "@/api/participant";
import { TypeEvent } from "@/types/typeEvent";
import { useState } from "react";
import { Loading } from "../Shared";

export type SignupFormProps = {
  event: TypeEvent;
};

const participantCtrl = new PasticipantClass();

export function SignupForm({ event }: SignupFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const response = await participantCtrl.create(formData, event.id);

    if (response?.status === 200) {
      setStatus("Inscricão realizada com sucesso !");
      setLoading(false);
    }

    if (response?.status === 400) {
      setStatus("Ops, algo deu errado !");
      setLoading(false);
    }
  };

  return (
    <section className="signup-form">
      <div className="signup-form__info">
        <h4 className="signup-form__info-headline">{event.attributes.name}</h4>

        <div
          className="signup-form__info-description"
          dangerouslySetInnerHTML={{ __html: event.attributes.description }}
        ></div>
      </div>

      {status ? (
        <h2>{status}</h2>
      ) : (
        <div className="signup-form__form-container">
          <form className="signup-form__form" onSubmit={handleOnSubmit}>
            <div className="signup-form__form-name">
              <div className="signup-form__form-name-input">
                <label htmlFor="first-name" className="copy">
                  Nome
                </label>
                <input
                  type="text"
                  id="first-name"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </div>
              <div className="signup-form__form-name-input">
                <label htmlFor="last-name" className="copy">
                  Sobrenome
                </label>
                <input
                  type="text"
                  id="last-name"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="copy">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div>
              <label htmlFor="phone" className="copy">
                Telefone
              </label>
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            <button type="submit" className="btn btn--small btn--turquoise">
              {loading ? <Loading /> : "Inscrever-se"}
            </button>
          </form>

          <div className="signup-form__price">
            <h4>Preços</h4>

            <p className="copy">
              Quarto individual:
              <span className="bold">R$ {event.attributes.singleRoom}</span>
              <span className="copy-small">por pessoa</span>
            </p>
            <p className="copy">
              Quarto compartilhado:
              <span className="bold">R$ {event.attributes.SharedPrice}</span>
              <span className="copy-small">por pessoa</span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
