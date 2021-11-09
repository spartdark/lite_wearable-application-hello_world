import router from '@system.router';

export default {
    data: {
        title: 'World'
    },
    clickAction() {
        //cambio de pantalla
        router.replace({
            uri: 'pages/index/index'
        });
    }
}
