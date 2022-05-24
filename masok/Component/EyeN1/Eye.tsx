import dynamic from 'next/dynamic';
import st from './Eye.module.css';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

export default function EyeN1() {
  return (
    <div className={st.uta}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque in voluptates laborum quis nihil impedit quidem iusto consectetur. Accusantium sunt quod architecto nulla numquam aperiam, illo deserunt officiis ut doloremque!</p>
        <Spline scene="https://prod.spline.design/66r8CG8Gmx61L5E7/scene.splinecode" />
    </div>
  );
}