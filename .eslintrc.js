module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended", // Temel kurallar
        "plugin:@typescript-eslint/recommended", // TypeScript için önerilen kurallar
        "prettier", // Prettier ile uyumlu hale getirir
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
        "eol-last": ["error", "always"], // Dosya sonunda yeni satır olmalı
        indent: ["error", 4], // 4 boşluk ile girinti
        "linebreak-style": ["error", "unix"], // Satır sonu formatı Unix (LF)
        quotes: ["error", "double"], // Çift tırnak kullanımını zorunlu kılar
        semi: ["error", "always"], // Satır sonlarında noktalı virgül gerekli
    },
};
