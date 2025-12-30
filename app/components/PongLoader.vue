<template>
  <div class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background-dark transition-opacity duration-500">
    <div class="pong-loader">
      <div class="paddle left"></div>
      <div class="ball"></div>
      <div class="paddle right"></div>
    </div>
    <p class="mt-8 text-primary font-display text-lg animate-pulse">Carregando...</p>
  </div>
</template>

<style scoped>
.pong-loader {
    position: relative;
    width: 200px;
    height: 100px;
    border: 2px solid #334155; /* Slate 700 */
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(19, 91, 236, 0.2);
}

.paddle {
    width: 10px;
    height: 40px;
    background-color: #135bec; /* Primary */
    position: absolute;
    border-radius: 2px;
}

.paddle.left {
    left: 5px;
    animation: movePaddleLeft 2s infinite ease-in-out;
}

.paddle.right {
    right: 5px;
    animation: movePaddleRight 2s infinite ease-in-out;
}

.ball {
    width: 15px;
    height: 15px;
    background-color: #6366f1; /* Accent */
    border-radius: 50%;
    position: absolute;
    left: calc(50% - 7.5px);
    animation: pongBall 2s infinite linear;
    box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
}

@keyframes movePaddleLeft {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(30px); }
}

@keyframes movePaddleRight {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-30px); }
}

@keyframes pongBall {
    0% {
        transform: translateX(-80px) translateY(0);
    }
    25% {
        transform: translateX(0) translateY(30px);
    }
    50% {
        transform: translateX(80px) translateY(0);
    }
    75% {
        transform: translateX(0) translateY(-30px);
    }
    100% {
        transform: translateX(-80px) translateY(0);
    }
}
</style>
