import classNames from 'classnames'
import React from 'react'

export const Button = ({className,children,...prop}:React.HTMLAttributes<HTMLButtonElement>) => 
	<button className={classNames('',className)} {...prop}>{children}</button>
