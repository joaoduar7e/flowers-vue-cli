<template>
  <div>
    <body>
      <div class="error">
        <h1>404</h1>
        <h2>Page Not Found</h2>
      </div>
    </body>
  </div>
</template>

<script></script>

<style scoped>
body {
  background-color: #cacaca;
}

.error {
  font-family: sans-serif;
  font-size: 40px;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
}

.error h1 {
  font-size: 140px;
  margin: 0;
  animation: animate 4s linear infinite;
}

@keyframes animate {
  0% {
    color: #41d3bd;
  }
  25% {
    color: #f0c835;
  }
  50% {
    color: #9f3dde;
  }
  75% {
    color: #ea4a4a;
  }
  100% {
    color: #41d3bd;
  }
}
</style>
