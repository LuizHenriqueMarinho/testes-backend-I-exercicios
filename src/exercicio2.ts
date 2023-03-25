export const exercicio2 = (str: string) => {
    const ano = str.split('/')[0]
    const mes = str.split('/')[1]
    const dia = str.split('/')[2]
    return `${dia}/${mes}/${ano}`
}