import React from 'react';
import './App.css';
import {useForm} from "react-hook-form";

function App() {
    const {register, handleSubmit, watch, errors} = useForm({});
    const selectedOthers = watch("other")

    const [strawberry, setStrawberry] = React.useState(0);
    const [banana, setBanana] = React.useState(0);
    const [apple, setApple] = React.useState(0);
    const [kiwi, setKiwi] = React.useState(0);


    function onSubmit(data) {
        console.log(data);
    }

    function resetAll() {
        setStrawberry(0);
        setBanana(0);
        setApple(0);
        setKiwi(0);
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div className="fruit-order">

                <div className="fruit-container">
                    <div className="strawberry">
                        <h1>🍓 Aardbeien </h1>
                        <button
                            type="button"
                            onClick={() => strawberry > 0 && setStrawberry(strawberry - 1)}
                        >-
                        </button>
                        <p>{strawberry}</p>
                        <button
                            type="button"
                            onClick={() => setStrawberry(strawberry + 1)}
                        >+
                        </button>
                    </div>

                    <div className="banana">
                        <h1>Bananen 🍌</h1>

                        <button
                            type="button"
                            onClick={() => banana > 0 && setBanana(banana - 1)}
                        >-
                        </button>
                        <p>{banana}</p>
                        <button
                            type="button"
                            onClick={() => setBanana(banana + 1)}
                        >+
                        </button>
                    </div>

                    <div className="apple">
                        <h1>Appels 🍏</h1>

                        <button
                            type="button"
                            onClick={() => apple > 0 && setApple(apple - 1)}
                        >-
                        </button>
                        <p>{apple}</p>
                        <button
                            type="button"
                            onClick={() => setApple(apple + 1)}
                        >+
                        </button>
                    </div>

                    <div className="kiwi">
                        <h1>Kiwi's🥝</h1>

                        <button
                            type="button"
                            onClick={() => kiwi > 0 && setKiwi(kiwi - 1)}
                        >-
                        </button>
                        <p>{kiwi}</p>
                        <button
                            type="button"
                            onClick={() => setKiwi(kiwi + 1)}
                        >+
                        </button>
                    </div>
                    <div className="reset">
                        <button
                            type="button"
                            id="btn-reset"
                            onClick={resetAll}>
                            Reset
                        </button>
                    </div>
                </div>

                <div className="order-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="fullName">
                            Voornaam:
                            <input
                                type="text"
                                name="fullName"
                                id="fullName"
                                ref={register({required: true})}
                            />
                            {errors.fullName && <p>Dit veld is verplicht!</p>}
                        </label>
                        <label htmlFor="lastName">
                            Achternaam:
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                ref={register({required: true})}
                            />
                            {errors.lastName && <p>Dit veld is verplicht!</p>}
                        </label>
                        <label htmlFor="ageField">
                            Leeftijd:
                            <input
                                type="number"
                                name="age"
                                id="ageField"
                                ref={register({required: true, min: 18})}
                            />
                            {errors.ageField && <p>Je moet minimaal 18 zijn!</p>}
                        </label>
                        <label htmlFor="postalCodeField">
                            Postcode:
                            <input
                                type="text"
                                name="postalCode"
                                id="postalCodeField"
                                ref={register({required: true})}
                            />
                            {errors.lastName && <p>Dit veld is verplicht!</p>}
                        </label>
                        <p>Bezorgfrequentie:</p>
                        <label htmlFor="deliver-field">
                            <input ref={register({required: true})} type="radio" name="deliver" id="week" value="week"/>Iedere
                            week
                        </label>
                        <label htmlFor="deliver-field">
                            <input ref={register({required: true})} type="radio" name="deliver" id="every-other-week"
                                   value="every-other-week"/>Om de week
                        </label>
                        <label htmlFor="deliver-field">
                            <input ref={register({required: true})} type="radio" name="deliver" id="month"
                                   value="month"/>Iedere maand
                        </label>
                        <label htmlFor="deliver-field">
                            <input
                                ref={register}
                                type="radio"
                                name="deliver"
                                id="other"
                                value="other"/>Anders
                        </label>
                        {selectedOthers === 'anders' && (
                            <input
                                type="text"
                                name="deliver-field"
                                ref={register({required: true})}
                            />
                        )}
                        <label htmlFor="comments">
                            Opmerking<br/>
                            <textarea
                                name="comments"
                                id="comments"
                                rows="5"
                                cols="40"
                                placeholder="Opmerkingen..">
                    </textarea>
                        </label>
                        <label htmlFor="terms-and-conditions">
                            <input
                                type="checkbox"
                                name="terms-and-conditions"
                                id="terms-and-conditions"/>
                            Ik ga akkoord met de voorwaarden
                        </label>
                        <button
                            type="submit">
                            Verzend
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default App;
