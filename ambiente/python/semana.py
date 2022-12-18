print("Calculadora de dia da semana")
print("============================")
print("Diga um dia (01, 04 ec):")
dia=int(input())
print("Diga um mês (01, 04 etc):")
mes=int(input())
print("Diga um ano (2020 etc):")
ano=int(input())
valor = ((dia) + (2*mes) + (((3/5)*(mes + 1))-(((3)*(mes+1))%5/5)) + (ano) + (ano-ano%4/4) - (ano-ano%100/100) + (ano-ano%400/400) + (2))
sem = valor%7
print("============================")
if sem == 0:
    print("Sábado")
if sem == 1:
    print("Domingo")
if sem == 2:
    print("Segunda")
if sem == 3:
    print("Terça")
if sem == 4:
    print("Quarta")
if sem == 5:
    print("Quinta")
if sem == 6:
    print("Sexta")
print(sem)
print(valor)
