import React, { Suspense } from 'react';
import st from './EyeN2.module.css';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function EyeN2() {
  return (
    <div className={st.uta}>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam consequuntur cumque accusamus qui, eveniet dolorem ullam repellat autem, ratione laudantium porro sed eaque blanditiis quam minus ducimus consequatur magni aliquam?</p>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/66r8CG8Gmx61L5E7/scene.splinecode" />
      </Suspense>
    </div>
  );
}