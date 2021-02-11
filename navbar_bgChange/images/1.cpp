#include <bits/stdc++.h>
using namespace std;

int main(){
	short int T;
	long int N;
	long int x, y,z;
	cin>>T;
	if(T>=1 && T<=5){
	for(short int i=0;i<T;i++)
	{
		cin>>N;
			if(N>=3 && N<=100000){
					
		  	long int A[N];
		for(long int i=0;i<N;i++)
		{
			cin>>A[i];
		
		}
		sort(A,A+N);
		
		long int sum = 0 ;
		sum = abs(A[0]-A[1])+ abs(A[1]-A[N-1])+abs(A[N-1]-A[0]);
		cout<<sum<<endl;
	}
	
}
}
return 0;
}
