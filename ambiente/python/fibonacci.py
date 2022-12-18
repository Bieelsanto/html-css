print("=================================================")
print("Quantos números da sequência de fibonacci deseja?")
print("=================================================")
while 1 == 1:
    qtd = int(input())
    print("=================================================")

    primeiro = 1
    segundo = 0
    ajudante = 0 
    string = ("1")
    if qtd > 1:
        for i in range (qtd-1):
            num = segundo + primeiro
            string += (", " + str(num))
            ajudante = primeiro
            primeiro = num
            segundo = ajudante
    print(string + ".")
    print("Digite outro número para mais sequências:")
