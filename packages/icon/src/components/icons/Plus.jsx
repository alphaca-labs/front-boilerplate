
import { ForwardedRef, forwardRef } from 'react';

const Plus = forwardRef((props, ref) => (
  <svg {...props} ref={ref} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

));

export default Plus;
  