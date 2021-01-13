import { createGlobalStyle } from 'styled-components'

export const IconFont = createGlobalStyle`
    @font-face {font-family: "iconfont";
        src: url('./iconfont.eot?t=1608766702681'); /* IE9 */
        src: url('./iconfont.eot?t=1608766702681#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAWQAAsAAAAACjAAAAVEAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDQAqHKIY3ATYCJAMYCw4ABCAFhG0HWRvmCBEVpL2R/UywbR2sHYiZ2V20QpMq1dDEq3MdGqHJm3h43O/13CQvRVCAqv2yniWBqgZUVTCSU5ufcDMGjZ1mI94QnnZttk4qBmaiglHO+DKDF7A5ta5BiFBhFizbz8dGiis7yrBzsvILPcDoA+CH+5kuEr99XD3b2iU7cDQeD2hA68vE0gM5vQOmc75h7OIyHifQa4YJ1rZfCAK6FZo2YNNdbnYq6I7ZlBIkdBtrzqVFfASN7vSefQGMfHB/P/6DIkRJmkx70sGFbwZY/yXz7CnU8v/PeW4Fb/vzgLmKjA6gEI+5vgfZz3VAeqVMsYl8drck/ZJ9Zvcs9NnT/22/Kqhaka9Xv/4vj5BkRUNUmq4fEXe0zd7JTTbBL1k2iV92bDK/QtkUfj21aaCp9jg4SCwCEJ8hsaNLt+lWSZpSV5KUh0S7JySUeKY68SSl8eGr1y6s0SHps3C/qSkBTkzy0MkJfiGT6kQmVs3Ozq0WMHVugfhOTnKRiSk+NkXwUvswmjbQVpxh0H6UotAWhCQ1dZYkJsnqoOkYnJhdt6q+Zo2pWdvrG63HEExG/EwSEc+XiI2bUhefV4xJ3S/RD/RG71fxvkusVhxvdd/cBd2xBrxdK9F/nMW67Q8863qQokgXLvcAKd4XdI6mW623M0x4HxlBtqFXKYn+8I6oMcbcwq7R9eKrSGTFFtWpfeJ9Bnvm8g4kj3fAwGRihjcp0S8gjrtLrNSnHuPMbXVB67oc8gE2wZ9mhpibWsWdtGQdX804E4KdFE+CYIwZhjd5Yx/NjdJdUtw864SIWzL+hVb5UqeDRlaYX1bJXRTparNoG/qYY/GKM5MatogXqbu0UvXR2i8GhPsVFhleYUEdSmVsRx7zzW8JWo+PKDhCq75eKxyO3gVHaUXU10U4FnhXjhoONFrUvQuOLji9vj5CKwoW3m42B128BM1Cc7ZmjiKXLkFi+L3gzbYPzftLj9IX82klab0PGh5P76c8see8MDvdnQO+ZvlfNfC5min9vzzReW7hKNsrLdeNEfrtVl5x0sGcJbxhVmyI5UolSgR7OD1JwivOK/F+K+t+1FUHV9+6d+25u9+8mF1vULKw8dbuAkOXVHl8vHlFU04/Wl9h/tyvzSY6p0gzpxDx2vw860xdd+/eb5QnFXG4GXnRyb8CuPxogSK+6eY6OMs7XNTkqqUtbNnmWOdCSB+2VwhzKQ2wrswQlXpiISrsU1dChHXLTu9ftzML1efw7/ICD+/k5noKPxj1jDp4sDgkU34zt70gaM8Or0jRIcc2u7K164K6tvCtk2j2Js60UIbNO3hpfGwEeAHtqekzyAmA9lA+Arlzmv8uFhx+NSUgwf//tqVA+d0Xu8+n9vnCZBmXr6Lbnzj5U+zrO6Sqp/PZ6dWWf5+WAkowf1WyUrPXIk4zbe2/WvHq0CCZhF59ju8yNOpeX/qJkWR2oNtECEmXaci6LWELsQONPqtQdVuDXiv8r+4zpkwWpQfLOgGEYZshGfQFsmEXsYV4FxqT3kI1HBD0OguFW/Yh7YI3JyFUukH5A2yCt4ZTN17zPbmhRYkqXdozSeQk5EmWLN6RJ+njjPjpClULVkIHV/A0atsAvYSajCaVar9PU5v3SYkJ3WgzOgmh0g2UP4BN8NZerJvUz9+TG1qUkqmS6DNJ5NVBLpHVwN7pfK2pc9kcP11B1eJDVkIHrtBDrZ4LoM/fVZPRRNUi0++laJatq0vGN3RXeQl6R9rr6jhFjhJN1OiyjNWA3+w3vxV79Pb9yU8OuO7QebZMsvwZOgwlj0Y=') format('woff2'),
        url('./iconfont.woff?t=1608766702681') format('woff'),
        url('./iconfont.ttf?t=1608766702681') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
        url('./iconfont.svg?t=1608766702681#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
        margin-right: 4px;
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .iconshuaxin:before {
        content: "\e60f";
    }

    .iconzhinanzhen:before {
        content: "\e610";
    }

    .iconAa:before {
        content: "\e636";
    }

    .iconmagnifier:before {
        content: "\e64d";
    }

    .iconyumaobi:before {
        content: "\e6e5";
    }
`;