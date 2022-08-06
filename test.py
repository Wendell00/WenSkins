count = 0 
quant = int(input("Digite a quantia de notas:")
for c in range(0,quant+1):
  nota = float(input(f"Digite a {c} nota:")
  count += nota
print(count/quant)
