const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speechText = 'Bienvenido a animales en otomí, ¿Qué quieres hacer?';
        
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                version: '1.0',
                document: require('./main.json'),
                datasources: {
                    "bodyTemplate7Data": {
                        "type": "object",
                        "objectId": "bt7Sample",
                        "title": "Animales en Otomí",
                        "image": {
                            "sources": [
                            {
                                "url": "https://s3.amazonaws.com/sonidosjim/images/ini.jpg",
                                "size": "small",
                                "widthPixels": 0,
                                "heightPixels": 0
                            },
                            {
                                "url": "https://s3.amazonaws.com/sonidosjim/images/ini.jpg",
                                "size": "large",
                                "widthPixels": 0,
                                "heightPixels": 0
                            }
                            ]
                        },
                        "logoUrl": "",
                        "hintText": "Try, \"Alexa.\""
                    }
                }
            })
            .getResponse(); 
        
    }
};

const Animales = [
            ['araña','https://s3.amazonaws.com/sonidosjim/arana.mp3','https://s3.amazonaws.com/sonidosjim/images/arana.jpg'],
            ['borrego','https://s3.amazonaws.com/sonidosjim/borrego.mp3','https://s3.amazonaws.com/sonidosjim/images/borrego.jpg'],
            ['caballo','https://s3.amazonaws.com/sonidosjim/caballo.mp3','https://s3.amazonaws.com/sonidosjim/images/caballo.jpg'],
            ['chivo','https://s3.amazonaws.com/sonidosjim/chivo.mp3','https://s3.amazonaws.com/sonidosjim/images/chivo.jpg'],
            ['conejo','https://s3.amazonaws.com/sonidosjim/conejo.mp3','https://s3.amazonaws.com/sonidosjim/images/conejo.jpg'],
            ['guajolote','https://s3.amazonaws.com/sonidosjim/guajolote.mp3','https://s3.amazonaws.com/sonidosjim/images/guajolote.jpg'],
            ['hormiga','https://s3.amazonaws.com/sonidosjim/hormiga.mp3','https://s3.amazonaws.com/sonidosjim/images/hormiga.jpg'],
            ['lagartija','https://s3.amazonaws.com/sonidosjim/lagartija.mp3','https://s3.amazonaws.com/sonidosjim/images/lagartija.jpg'],
            ['mariposa','https://s3.amazonaws.com/sonidosjim/mariposa.mp3','https://s3.amazonaws.com/sonidosjim/images/mariposa.jpg'],
            ['pájaro','https://s3.amazonaws.com/sonidosjim/pajaro.mp3','https://s3.amazonaws.com/sonidosjim/images/pajaro.jpg'],
            ['pato','https://s3.amazonaws.com/sonidosjim/pato.mp3','https://s3.amazonaws.com/sonidosjim/images/pato.jpg'],
            ['perro','https://s3.amazonaws.com/sonidosjim/perro.mp3','https://s3.amazonaws.com/sonidosjim/images/perro.jpg'],
            ['pollo','https://s3.amazonaws.com/sonidosjim/pollo.mp3','https://s3.amazonaws.com/sonidosjim/images/pollo.jpg'],
            ['puerco','https://s3.amazonaws.com/sonidosjim/puerco.mp3','https://s3.amazonaws.com/sonidosjim/images/puerco.jpg'],
            ['ratón','https://s3.amazonaws.com/sonidosjim/raton.mp3','https://s3.amazonaws.com/sonidosjim/images/raton.jpg'],
            
        ];
 
const AnimalIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AnimalIntent';
    },
    handle(handlerInput) {
        
        //const request = handlerInput.requestEnvelope.request;
        //var estatura = request.intent.slots.respuesta.value;
        
        const listaPrefijos = [
            'Sabías que',
            'Aprende que',
            'escucha con atención',
            'conoce que',
            'escucha esto'
        ];
        
        const listaPostfijos = [
            ' se escucha',
            ' se dice',
            ' se pronuncia',
            ' en otomí se dice',
            ' en lengua otomí se dice'
        ];
        
        var indiceAleatorio = Math.floor(Math.random() * Animales.length);
        const animalAleatorio = Animales[indiceAleatorio][0];
        const sound = Animales[indiceAleatorio][1];
        const imagen = Animales[indiceAleatorio][2];
        //const sound = Animales[0][1];
        
        
        indiceAleatorio = Math.floor(Math.random() * listaPrefijos.length);
        const prefijoAleatorio = listaPrefijos[indiceAleatorio];
        
        indiceAleatorio = Math.floor(Math.random() * listaPostfijos.length);
        const postfijoAleatorio = listaPostfijos[indiceAleatorio];
        
        var sonido = "<audio src='" + sound + "'/>";
        
        const speechOutput = prefijoAleatorio + ', ' + animalAleatorio +', ' + postfijoAleatorio + ', ' + sonido + '¿Qué más quieres hacer?';
        //const speechOutput = prefijoAleatorio + ', ' + animalAleatorio +', ' + postfijoAleatorio + ', hola';

        /*return handlerInput.responseBuilder
            .speak(speechOutput)
            .reprompt(speechOutput)
            .getResponse();
        */
        
        
        return handlerInput.responseBuilder
            .speak(speechOutput)
            .reprompt(speechOutput)
            .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                version: '1.0',
                document: require('./main.json'),
                datasources: {
                    "bodyTemplate7Data": {
                        "type": "object",
                        "objectId": "bt7Sample",
                        "title": animalAleatorio,
                        "image": {
                            "sources": [
                            {
                                "url": imagen,
                                "size": "small",
                                "widthPixels": 0,
                                "heightPixels": 0
                            },
                            {
                                "url": imagen,
                                "size": "large",
                                "widthPixels": 0,
                                "heightPixels": 0
                            }
                            ]
                        },
                        "logoUrl": "",
                        "hintText": "Try, \"Alexa.\""
                    }
                }
            })
            .getResponse();   
    }
};

var sonido_juego;
var animal_juego;
var contador=0;
var imagen_juego;
        
const PracticarIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'PracticarIntent';
    },
    handle(handlerInput) {
        var indiceAleatorio = Math.floor(Math.random() * Animales.length);
        animal_juego = Animales[indiceAleatorio][0];
        sonido_juego = Animales[indiceAleatorio][1];
        imagen_juego = Animales[indiceAleatorio][2];
        //const sound = Animales[0][1];
        
        
        //this.attributes['countContainer'] = 0;   
        
        sonido_juego = "<audio src='" + sonido_juego + "'/>";
        
        const speechText = 'Tienes 3 oportunidades, para intentar adivinar de qué animal se trata. Escucha con atención: ' + sonido_juego + '¿Qué animal es? ';
        
        /*return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();*/
            
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                version: '1.0',
                document: require('./main.json'),
                datasources: {
                    "bodyTemplate7Data": {
                        "type": "object",
                        "objectId": "bt7Sample",
                        "title": "Animales en otomí",
                        "logoUrl": "",
                        "hintText": "Try, \"Alexa.\""
                    }
                }
            })
            .getResponse();  
        
    }
};


const AdivinaIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AdivinaIntent';
    },
    handle(handlerInput) {
        
        
        const request = handlerInput.requestEnvelope.request;
        var get_animal = request.intent.slots.animal.value;
        
        
       
        //var indiceAleatorio = Math.floor(Math.random() * Animales.length);
        //const animal = Animales[indiceAleatorio][0];
        //const sound = Animales[indiceAleatorio][1];
       
        //var sonido = "<audio src='" + sound + "'/>";
        
        const listaError = [
            'achís achís',
            'aguas',
            'ah caray',
            'ámonos',
            'ash',
            'ay ay ay',
            'buuuh',
            'épale',
            'lástima',
            'lo siento mucho'
        ];
        
        var indiceError = Math.floor(Math.random() * listaError.length);
        const sonido_error = listaError[indiceError];
        
        var perdiste = "<say-as interpret-as='interjection'>" + sonido_error + "</say-as>";
        var ganaste = "<say-as interpret-as='interjection'>'muchas felicidades'</say-as>"; 
        
        var speechText;
        
        if (get_animal === animal_juego){
            //speechText = ganaste + ', tú dijiste ' + get_animal + ' para volver a jugar di: quiero adivinar o más animales';
            speechText = '¡Muchas Felicidades! , el animal, ' + sonido_juego + ' significa, ' + get_animal + ' . para volver a jugar di: quiero adivinar un animal, ó puedes seguir aprendiendo más animales';
            contador=0;
            
            return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                version: '1.0',
                document: require('./main.json'),
                datasources: {
                    "bodyTemplate7Data": {
                        "type": "object",
                        "objectId": "bt7Sample",
                        "title": animal_juego,
                        "image": {
                            "sources": [
                            {
                                "url": imagen_juego,
                                "size": "small",
                                "widthPixels": 0,
                                "heightPixels": 0
                            },
                            {
                                "url": imagen_juego,
                                "size": "large",
                                "widthPixels": 0,
                                "heightPixels": 0
                            }
                            ]
                        },
                        "logoUrl": "",
                        "hintText": "Try, \"Alexa.\""
                    }
                }
            })
            .getResponse();   
            
        }
        
        else if (contador === 2){
            speechText = perdiste + ' perdiste, tú dijiste, ' + get_animal + 'y la respuesta era: '+ animal_juego + '. Para volver a jugar di: quiero adivinar un animal, ó puedes seguir aprendiendo más animales';
            contador=0;
            
            return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                version: '1.0',
                document: require('./main.json'),
                datasources: {
                    "bodyTemplate7Data": {
                        "type": "object",
                        "objectId": "bt7Sample",
                        "title": animal_juego,
                        "image": {
                            "sources": [
                            {
                                "url": imagen_juego,
                                "size": "small",
                                "widthPixels": 0,
                                "heightPixels": 0
                            },
                            {
                                "url": imagen_juego,
                                "size": "large",
                                "widthPixels": 0,
                                "heightPixels": 0
                            }
                            ]
                        },
                        "logoUrl": "",
                        "hintText": "Try, \"Alexa.\""
                    }
                }
            })
            .getResponse();  
            
        }
        
        else{
            speechText = perdiste +' ,ese no es, di otro animal' ;
            contador++;
            
            return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                version: '1.0',
                document: require('./main.json'),
                datasources: {
                    "bodyTemplate7Data": {
                        "type": "object",
                        "objectId": "bt7Sample",
                        "title": "Fallaste",
                        "image": {
                            "sources": [
                            {
                                "url": "https://s3.amazonaws.com/sonidosjim/images/cancel.png",
                                "size": "small",
                                "widthPixels": 0,
                                "heightPixels": 0
                            },
                            {
                                "url": "https://s3.amazonaws.com/sonidosjim/images/cancel.png",
                                "size": "large",
                                "widthPixels": 0,
                                "heightPixels": 0
                            }
                            ]
                        },
                        "logoUrl": "",
                        "hintText": "Try, \"Alexa.\""
                    }
                }
            })
            .getResponse();  
        }
        
    }
};



const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = 'Puedes aprender un animal o puedes tratar de adivinar uno que yo te diga. ¿Qué quieres hacer?';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                version: '1.0',
                document: require('./main.json'),
                datasources: {
                    "bodyTemplate7Data": {
                        "type": "object",
                        "objectId": "bt7Sample",
                        "title": "Animales en Otomí",
                        "image": {
                            "sources": [
                            {
                                "url": "https://s3.amazonaws.com/sonidosjim/images/ini.jpg",
                                "size": "small",
                                "widthPixels": 0,
                                "heightPixels": 0
                            },
                            {
                                "url": "https://s3.amazonaws.com/sonidosjim/images/ini.jpg",
                                "size": "large",
                                "widthPixels": 0,
                                "heightPixels": 0
                            }
                            ]
                        },
                        "logoUrl": "",
                        "hintText": "Try, \"Alexa.\""
                    }
                }
            })
            .getResponse(); 
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        
        const despedidas = [
            'espero verte pronto',
            'nos vemos cuídate',
            'gusto de escucharte hoy, ',
            'espero te haya gustado, te espero pronto',
            'espero hayas aprendido, nos vemos',
            'vuelve pronto para seguir practicando',
            'espero que hayas aprendido un animal nuevo'
            
        ];
        
        var indiceAleatorio = Math.floor(Math.random() * despedidas.length);
        const despedidaAleatoria = despedidas[indiceAleatorio];
        
        const speechText = despedidaAleatoria + ' , adiós';
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = handlerInput.requestEnvelope.request.intent.name;
        const speechText = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.message}`);
        const speechText = `Sorry, I couldn't understand what you said. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};


function getRandomInt (){
    
    
}
// This handler acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.


exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        AnimalIntentHandler,
        PracticarIntentHandler,
        AdivinaIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler) // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    .addErrorHandlers(
        ErrorHandler)
    .lambda();

