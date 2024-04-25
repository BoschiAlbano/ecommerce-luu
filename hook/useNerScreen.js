import React, { useState, useEffect, useRef } from "react";

export default function useNerScreen({ distance = "100px", once = true } = {}) {
    const [isNearScreen, setShow] = useState(false);
    const elementRef = useRef();

    useEffect(function () {
        let Observar;

        //const elemento = externalRef ? externalRef.current : elementRef.current;

        //console.log(elemento)

        Promise.resolve(
            typeof IntersectionObserver != "undefined"
                ? IntersectionObserver
                : import("intersection-observer")
        ).then(() => {
            // Intersection Observer - no compatible para todos los navegadores (usar polyfill) "intersection-observer": "^0.12.2",
            Observar = new IntersectionObserver(onchange, {
                // son condiciones para que marque si esta haciendo interseccion o no
                //root:
                rootMargin: distance,
                //threshold: [.5, 1] se muestre cunado este al 50% o 1 total defecto 0 apenas carga la pag
            });

            //elemento && Observar.observe(elemento)
            elementRef.current && Observar.observe(elementRef.current);
        });

        const onchange = (entries, observer) => {
            const el = entries[0];

            if (el.isIntersecting) {
                setShow(true);
                once && observer.disconnect();
            } else {
                !once && setShow(false);
            }
        };

        return () => Observar && Observar.disconnect();
    }, []);

    return { isNearScreen, elementRef };
    //return {isNearScreen}
}
