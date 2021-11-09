import router from '@system.router';
// Import the app module.
import app from '@system.app'

export default {
    data: {
        title: 'World'
    },
    clickAction() {
        //cambio el color del texto
        this.fontSize = '38px';
        this.fontColor = '#ffffff';
        // cambio de pantalla
        router.replace({
            uri: 'pages/details/details'
        });
    },
    touchMove(e) { // Handle the swipe event.
        if (e.direction == "right") // Swipe right to exit.
        this.appExit();

    },
    appExit() { // Exit the application.
        app.terminate();
    }
}

