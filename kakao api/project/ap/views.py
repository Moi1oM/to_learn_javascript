from django.shortcuts import render, redirect

# Create your views here.
def home(request):
    return render(request,'index.html')

def test2(request):
    return render(request,'test2.html')

def home2(request):
    return render(request,'index2.html')

def home3(request):
    return render(request,'index3.html')

def new(request):
    return render(request,'new.html')