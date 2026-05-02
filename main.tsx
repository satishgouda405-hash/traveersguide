@import './styles/fonts.css';
@import './styles/theme.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  background: #ffffff;
  color: #000000;
}

body {
  font-family: var(--font-body);
}
