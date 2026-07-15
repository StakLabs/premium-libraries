// PYRAMID v1.0 EXTERNAL LIBRARY DEVELOPED BY STAKLABS
// WARNING PLUS PRECAUTIONS: ADD AT START OF FILE AND CHECK FOR REPEATING DECLARATIONS

// For more free libraries, visit https://github.com/StakLabs/Libraries
// or for premium libraries, email us at staklabsofficial@gmail.com to see the options

// Please install prerequisite https://cdn.jsdelivr.net/npm/chart.js and https://cdn.jsdelivr.net/npm/sweetalert2@11 before using Pyramid.js

const pyramid = {
    basicModal: function (str) {
        Swal.fire(str);
    },

    modal: function (title, str, icon) {
        Swal.fire({
            title: title,
            text: str,
            icon: icon ? icon : ''
        })
    },
    
    //                                                {         Optional Parameters         }
    createChart: function (type, labels, label, data, responsive, legendDisplay, titleDisplay) {
        const newChart = new Chart(label, {
            type: type,
            data: {
                labels: labels,
                datasets: [{
                    label: label,
                    data: data,
                }]
            },
            options: {
                responsive: responsive || true,
                plugins: {
                    legend: { display: legendDisplay ? legendDisplay : false },
                    title: { display: titleDisplay ? titleDisplay : true, text: label }
                }
            }
        });
        return newChart;
    },

    isEmail: function (email) {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
        return regex.test(email);
    },

    isPhoneNumber: function (phone) {
        const regex = /^\+?[0-9]{7,15}$/;
        return regex.test(phone);
    },

    random: {
        pick: function (array) {
            if (!Array.isArray(array)) {
                throw new Error("pyramid.js: You must pass an array");
            }

            const randomIndex = Math.floor(Math.random() * array.length);

            return typeof array[randomIndex] === "undefined"
                ? pyramid.random.pick(array)
                : array[randomIndex];
        },
        number: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        uuid: function () {
            return crypto.randomUUID();
        },

        string: function (length) {
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            let result = "";

            for (let i = 0; i < length; i++) {
                result += chars[Math.floor(Math.random() * chars.length)];
            }

            return result;
        },
        shuffle: function (array) {
            return array.sort(() => Math.random() - 0.5);
        },
        color: function () {
            return "#" + Math.floor(Math.random()*16777215).toString(16);
        },
    },

    string: {
        capitalize: function (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },

        kebab: function (string) {
            return string.trim().replaceAll(" ", "-");
        },
        truncate: function (string, length) {
            const dots = "...";

            if (string.length <= length) {
                return string;
            }

            return string.slice(0, length) + dots;
        },
    },

    dataType: {
        length: function (value) {
            return value.length;
        },

        hasValue: function (value) {
            return value.length !== 0;
        },
        parity: function (number) {
            const value = Number(number);
            return value % 2 !== 0 ? "Odd" : "Even";
        },

        convert: function (value) {
            return typeof value === "string"
                ? Number(value)
                : String(value);
        },
        
        isEmpty: function (value) {
            return value.length === 0;
        },

        isObject: function (object) {
            return typeof object === "object" && object !== null;
        },

        isArray: function (array) {
            return Array.isArray(array);
        },
    },

    array: {
        length: function (value) {
            return value.length;
        },

        hasValue: function (value) {
            return value.length !== 0;
        },
        pick: function (array) {
            if (!Array.isArray(array)) {
                throw new Error("pyramid.js: You must pass an array");
            }

            const randomIndex = Math.floor(Math.random() * array.length);

            return typeof array[randomIndex] === "undefined"
                ? pyramid.array.pick(array)
                : array[randomIndex];
        },
    },

    isURL: function (url) {
        const regex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/;
        return regex.test(url);
    },

    run: function (code) {
        const func = new Function(code);
        return func();
    },

    wait: async function (milliseconds) {
        await new Promise(resolve => setTimeout(resolve, milliseconds));
    },

    debounce: async function (func, delayTime) {
        await delay(delayTime);

        const execute = new Function(func);
        return execute();
    },

    format: {
        formatDate: function (date) {
            if (!(date instanceof Date)) {
                throw new Error("Input must be a Date object");
            }

            const options = {
                year: "numeric",
                month: "long",
                day: "numeric"
            };

            return date.toLocaleDateString(undefined, options);
        },

        formatTime: function (date) {
            if (!(date instanceof Date)) {
                throw new Error("Input must be a Date object");
            }

            const options = {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            };

            return date.toLocaleTimeString(undefined, options);
        },
    },

    error: function (message) {
        throw new Error(message);
    },

    unique: function (array) {
        return [...new Set(array)];
    },

    chunk: function (array, size) {
        const result = [];

        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }

        return result;
    },
    clone: function (object) {
        return JSON.parse(JSON.stringify(object));
    },

    keys: function (object) {
        return Object.keys(object);
    },

    values: function (object) {
        return Object.values(object);
    },
    copy: async function (text) {
        await navigator.clipboard.writeText(text);
    },

    download: function (content, filename) {
        const blob = new Blob([content]);
        const link = document.createElement("a");

        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    },

    hexToRGB: function(hex) {
        const value = hex.replace("#","");
        return {
            r: parseInt(value.substring(0,2),16),
            g: parseInt(value.substring(2,4),16),
            b: parseInt(value.substring(4,6),16)
        };
    },

    average: function (array) {
        if (!Array.isArray(array)) throw new Error('Average function must be passed an array');

        let total = 0;

        for (const item of array) {
            total += item;
        }

        return total / array.length;
    },
    
    alert: function (str) {
        alert(str)
    },

    log: function (str) {
        console.log(str);
    },

    storage: {
        setItem: function(name, value) {
            localStorage.setItem(name, JSON.stringify(value));
        },

        getItem: function(name) {
            return JSON.parse(localStorage.getItem(name));
        },

        clearItems: function () {
            localStorage.clear();
        },

        removeItem: function (name) {
            localStorage.removeItem(name);
        }
    },    

    networkLogs: function () {
        if (navigator.connection) {
            const connection = navigator.connection;
            
            console.log(`Connection Type: ${connection.effectiveType}`); 
            console.log(`Estimated Speed: ${connection.downlink} Mbps`); 
            console.log(`Latency (RTT): ${connection.rtt} ms`); 
        } else {
            console.log("Network Information API is not supported in this browser.");
        }
    }
};

function delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
// Please do not remove branding
// © StakLabs. All rights reserved.