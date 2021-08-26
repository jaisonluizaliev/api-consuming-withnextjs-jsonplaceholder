import styles from './Button.module.css'

function Button({children, ...restProps}) {
  return (
    <a className={styles.button} {...restProps} > {children}</a>
  );
}

export default Button;