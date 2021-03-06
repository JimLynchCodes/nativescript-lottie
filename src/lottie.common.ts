import { booleanConverter, Property, View } from '@nativescript/core';

export class LottieViewBase extends View {
  public src: string;
  public loop: boolean;
  public autoPlay: boolean;
  public progress: number;
  public completionBlock: (animationFinished: boolean) => void;
}

export const srcProperty = new Property<LottieViewBase, string>({
  name: 'src'
});
srcProperty.register(LottieViewBase);

export const loopProperty = new Property<LottieViewBase, boolean>({
  name: 'loop',
  defaultValue: false,
  valueConverter: booleanConverter
});
loopProperty.register(LottieViewBase);

export const autoPlayProperty = new Property<LottieViewBase, boolean>({
  name: 'autoPlay',
  defaultValue: false,
  valueConverter: booleanConverter
});
autoPlayProperty.register(LottieViewBase);

export const renderModeProperty = new Property<LottieViewBase, number>({
  name: 'renderMode'
});
renderModeProperty.register(LottieViewBase);

export const progressProperty = new Property<LottieViewBase, number>({
  name: 'progress'
});
progressProperty.register(LottieViewBase);
