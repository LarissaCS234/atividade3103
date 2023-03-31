

function  Temperatura(C) {
        var F = C * 1.8 + 32;
        var K = C + 273.15;
        var Ra = C * 1.8 + 32 + 459.67;
        var Re = C * 0.8;

        System.out.println("A temperatura em Fahrenheit é: " + F);
        System.out.println("A temperatura em Kelvin é: " + K);
        System.out.println("A temperatura em Reaumur é: " + Ra);
        System.out.println("A temperatura em Rankine é: " + Re);
    }
