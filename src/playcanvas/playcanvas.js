
//How to use:
//  - Make sure Fill Mode is set to "None" in your project
//  - Download playcanvas project
//  - Create a "playcanvas" folder in your root directory
//  - Paste the contents of the downloaded project into that folder
//  - Look in the setting.js file and paste the correct json path into SCENE_PATH below
//  - Create a canvas with the id "application"
//  - Call the start function


const PlayCanvas = {
    canvas: null,
    app: null,

    setupDevices(canvas) {
        var devices = {
            elementInput: new pc.ElementInput(canvas, {
                useMouse: window.INPUT_SETTINGS.useMouse,
                useTouch: window.INPUT_SETTINGS.useTouch
            }),
            keyboard: window.INPUT_SETTINGS.useKeyboard ? new pc.Keyboard(window) : null,
            mouse: window.INPUT_SETTINGS.useMouse ? new pc.Mouse(canvas) : null,
            gamepads: window.INPUT_SETTINGS.useGamepads ? new pc.GamePads() : null,
            touch:
                window.INPUT_SETTINGS.useTouch && pc.platform.touch
                    ? new pc.TouchDevice(canvas)
                    : null
        };
        return devices;
    },
    adjustSettings() {
        window.ASSET_PREFIX = "./playcanvas/"
        window.SCRIPT_PREFIX = "./playcanvas/"
        window.SCENE_PATH = `./${window.SCENE_PATH}`
        window.CONFIG_FILENAME = `./playcanvas/${window.CONFIG_FILENAME}`

        if (window.PRELOAD_MODULES != null && window.PRELOAD_MODULES.length > 0){
            if(window.PRELOAD_MODULES[0].glueUrl != null){
                window.PRELOAD_MODULES[0].glueUrl = `./${window.PRELOAD_MODULES[0].glueUrl}`
            }
            if(window.PRELOAD_MODULES[0].wasmUrl != null){
                window.PRELOAD_MODULES[0].wasmUrl = `./${window.PRELOAD_MODULES[0].wasmUrl}`
            }
            if(window.PRELOAD_MODULES[0].fallbackUrl != null){
                window.PRELOAD_MODULES[0].fallbackUrl = `./${window.PRELOAD_MODULES[0].fallbackUrl}`
            }
        }
    },
    async start() {

        function addScript (scriptPath) {
            return new Promise((resolve, reject) => {
                var head = document.getElementsByTagName('head')[0];
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.onload = function() {
                    resolve();
                }
                script.src = scriptPath;
                head.appendChild(script);
            })
        }
        await addScript('./playcanvas/playcanvas-stable.min.js')
        await addScript('./playcanvas/__settings__.js')
        await addScript('./playcanvas/__modules__.js')

        this.adjustSettings();

        this.canvas = document.getElementById('application');

        let devices = this.setupDevices(this.canvas);

        this.app = new pc.Application(this.canvas, {
            elementInput: devices.elementInput,
            keyboard: devices.keyboard,
            mouse: devices.mouse,
            gamepads: devices.gamepads,
            touch: devices.touch,
            graphicsDeviceOptions: window.CONTEXT_OPTIONS,
            assetPrefix: window.ASSET_PREFIX || "",
            scriptPrefix: window.SCRIPT_PREFIX || "",
            scriptsOrder: window.SCRIPTS || []
        });

        let configure = function() {
            this.app.configure(CONFIG_FILENAME, function (err) {

                this.canvas.style.width = null;//remove the width and height set by playcanvas
                this.canvas.style.height = null;

                this.app.preload(function (err) {
                    if (err)
                        console.error(err);

                    this.app.loadScene(SCENE_PATH, function (err) {
                        if (err)
                            console.error(err);

                        this.app.start();

                        window.addEventListener("resize", this.matchClientSize.bind(this));
                        window.addEventListener("orientationchange", this.matchClientSize.bind(this));
                        this.matchClientSize();

                    }.bind(this));
                }.bind(this));
            }.bind(this));
        }.bind(this);

        if (PRELOAD_MODULES.length > 0)
        {
            loadModules(PRELOAD_MODULES, ASSET_PREFIX, configure);
        }
        else
        {
            configure();
        }
    },
    matchClientSize() {
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;
    }
}

export default PlayCanvas