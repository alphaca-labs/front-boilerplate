
import { ForwardedRef, forwardRef } from 'react';

const Activity = forwardRef((props, ref) => (
  <svg {...props} ref={ref} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

));

export default Activity;
  