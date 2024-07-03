
import { ForwardedRef, forwardRef } from 'react';

const X = forwardRef((props, ref) => (
  <svg {...props} ref={ref} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M17 7L7 17M7 7L17 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

));

export default X;
  