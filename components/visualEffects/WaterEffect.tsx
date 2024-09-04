import { useEffect, useRef } from 'react';
import * as $ from 'jquery';
import 'jquery.ripples';
import type { ReactNode, RefObject } from 'react';

export interface RipplesOptions {
  imageUrl: string;
  dropRadius?: number;
  perturbance?: number;
  resolution?: number;
  interactive?: boolean;
  crossOrigin?: string;
}

export type SetProperties =
  | 'dropRadius'
  | 'perturbance'
  | 'interactive'
  | 'imageUrl'
  | 'crossOrigin';

export type Drop = ({
  x,
  y,
  radius,
  strength,
}: {
  x: number;
  y: number;
  radius: number;
  strength: number;
}) => void;

export type Set = ({
  property,
  value,
}: {
  property: SetProperties;
  value: any;
}) => void;

export interface WaterEffectProps
  extends RipplesOptions,
    React.ComponentPropsWithoutRef<'div'> {
  children: (props: {
    destroy: () => void;
    pause: () => void;
    play: () => void;
    hide: () => void;
    show: () => void;
    drop: Drop;
    set: Set;
    updateSize: () => void;
  }) => ReactNode;
}

export const useRipples = ({
  imageUrl,
  dropRadius,
  perturbance,
  resolution,
  interactive,
  crossOrigin,
  rippleRef,
}: RipplesOptions & {
  rippleRef: RefObject<HTMLDivElement>;
}) => {
  const target = useRef({
    ripples: (_arg: any, ..._args: any[]) => {},
  });

  useEffect(() => {
    target.current = $(rippleRef.current as any) as any;

    target.current.ripples({
      imageUrl,
      dropRadius,
      perturbance,
      resolution,
      interactive,
      crossOrigin,
    });

    return () => {
      target.current.ripples('destroy');
    };
  }, [
    crossOrigin,
    dropRadius,
    imageUrl,
    interactive,
    perturbance,
    resolution,
    rippleRef,
  ]);

  const destroy = () => {
    target.current.ripples('destroy');
  };

  const drop: Drop = ({ x, y, radius, strength }) => {
    target.current.ripples('drop', x, y, radius, strength);
  };

  const pause = () => {
    target.current.ripples('pause');
  };

  const play = () => {
    target.current.ripples('play');
  };

  const hide = () => {
    target.current.ripples('hide');
  };

  const show = () => {
    target.current.ripples('show');
  };

  const set: Set = ({ property, value }) => {
    target.current.ripples('set', property, value);
  };

  const updateSize = () => {
    target.current.ripples('updateSize');
  };

  return {
    destroy,
    pause,
    play,
    hide,
    show,
    drop,
    set,
    updateSize,
  };
};

function WaterEffect({
  imageUrl = '',
  dropRadius = 20,
  perturbance = 0.03,
  resolution = 256,
  interactive = true,
  crossOrigin = '',
  children,
  ...otherProps
}: WaterEffectProps) {
  const rippleRef = useRef<HTMLDivElement>(null);
  const { destroy, pause, play, hide, show, drop, set, updateSize } =
    useRipples({
      imageUrl,
      dropRadius,
      perturbance,
      resolution,
      interactive,
      crossOrigin,
      rippleRef,
    });

  // Auto-play effect when component mounts
  useEffect(() => {
    play(); // Automatically start the effect when the component is mounted

    // Optional: Continuously trigger random drops
    const intervalId = setInterval(() => {
      if (rippleRef.current) {
        const x = Math.random() * rippleRef.current.clientWidth;
        const y = Math.random() * rippleRef.current.clientHeight;
        drop({ x, y, radius: dropRadius, strength: 0.3 });
      }
    }, 2000); // Trigger every 2 seconds

    return () => {
      clearInterval(intervalId); // Cleanup interval on component unmount
      destroy(); // Cleanup ripples on component unmount
    };
  }, [play, drop, destroy, dropRadius]);

  return (
    <div ref={rippleRef} {...otherProps}>
      {children({
        destroy,
        pause,
        play,
        hide,
        show,
        drop,
        set,
        updateSize,
      })}
    </div>
  );
}

export default WaterEffect;
